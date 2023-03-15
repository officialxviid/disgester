"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.optimizePaletteByGA = exports.calFitness = void 0;
const color_schema_1 = require("@antv/color-schema");
const utils_1 = require("../utils");
const evaluators_1 = require("../evaluators");
const simulators_1 = require("../simulators");
// Genetic algorithm configuration
const POPULATION_NUMBER = 50;
const CROSSOVER_RATE = 0.9;
const MUTATION_RATE = 0.1;
const MAX_GENERATION = 100;
const ADAPTIVE_RANGE = [0.8, 1.2];
const rouletteWheelSelection = (fitnesses) => {
    const sumFitness = fitnesses.reduce((a, b) => a + b);
    let index = 0;
    const seed = utils_1.random(sumFitness);
    let count = 0;
    for (let i = 0; i < fitnesses.length; i += 1) {
        count += fitnesses[i];
        if (seed < count) {
            index = +i;
        }
    }
    return index;
};
const tournamentSelection = (fitnesses) => {
    const TOURNAMENT_SIZE = 3;
    let index = -1;
    let maxFitness = 0;
    for (let i = 0; i < TOURNAMENT_SIZE; i += 1) {
        const randomIndex = utils_1.randomInt(fitnesses.length - 1);
        if (fitnesses[randomIndex] > maxFitness) {
            index = i;
            maxFitness = fitnesses[randomIndex];
        }
    }
    return index;
};
const selectionFunction = {
    rouletteWheel: rouletteWheelSelection,
    tournament: tournamentSelection,
};
const selection = (fitnesses, type = 'tournament') => {
    return selectionFunction[type](fitnesses);
};
const crossover = (father, mother) => {
    const child1 = utils_1.cloneDeep(father);
    const child2 = utils_1.cloneDeep(mother);
    for (let i = 1; i < father.length; i += 2) {
        child1[i] = mother[i];
        child2[i] = father[i];
    }
    return [child1, child2];
};
const mutate = (colors, unlockedIndexs, simulationType, colorModel) => {
    const newColors = utils_1.cloneDeep(colors);
    // pick one color and change color adaptively
    const mutateIndex = unlockedIndexs[utils_1.randomInt(unlockedIndexs.length - 1)];
    const dimensionIndex = utils_1.randomInt(colors[0].length - 1);
    let newValue = newColors[mutateIndex][dimensionIndex] * utils_1.random(...ADAPTIVE_RANGE);
    // clip
    let range = [15, 240]; // grayscale
    if (simulationType !== 'grayscale') {
        range = color_schema_1.ColorModelRange[colorModel][colorModel.split('')[dimensionIndex]];
    }
    const [min, max] = range;
    if (newValue < min) {
        newValue = min;
    }
    else if (newValue > max) {
        newValue = max;
    }
    newColors[mutateIndex][dimensionIndex] = newValue;
    return newColors;
};
// fitness function
const calFitness = (colors, locked, simulationType, colorModel, colorDifferenceMeasure, backgroundColor) => {
    let newColors;
    if (simulationType === 'grayscale') {
        newColors = colors.map(([gray]) => utils_1.grayToColor(gray));
    }
    else {
        newColors = colors.map((color) => simulators_1.colorSimulation(utils_1.arrayToColor(color, colorModel), simulationType));
    }
    let minDifference = Infinity;
    for (let i = 0; i < newColors.length; i += 1) {
        for (let j = i + 1; j < newColors.length; j += 1) {
            if (!(locked[i] && locked[j])) {
                minDifference = Math.min(minDifference, evaluators_1.colorDifference(newColors[i], newColors[j], { measure: colorDifferenceMeasure, backgroundColor }));
            }
        }
    }
    return minDifference;
};
exports.calFitness = calFitness;
const optimizePaletteByGA = (colors, locked, simulationType, threshold, colorModel, colorDifference, backgroundColor) => {
    if (Math.round(exports.calFitness(colors, locked, simulationType, colorModel, colorDifference, backgroundColor)) > threshold) {
        return colors;
    }
    const unlockedIndexs = new Array(colors.length)
        .fill(0)
        .map((d, index) => index)
        .filter((d, index) => !locked[index]);
    // Creating a new generation
    let population = new Array(POPULATION_NUMBER)
        .fill(0)
        .map(() => mutate(colors, unlockedIndexs, simulationType, colorModel));
    // Evaluating individuals
    let fitnesses = population.map((colors) => exports.calFitness(colors, locked, simulationType, colorModel, colorDifference, backgroundColor));
    let bestFitness = Math.max(...fitnesses);
    let elites = population[fitnesses.findIndex((d) => d === bestFitness)];
    let cnt = 1;
    while (cnt < MAX_GENERATION && Math.round(bestFitness) < threshold) {
        // Elitist Strategy
        const newPopulation = [elites];
        for (let i = 1; i < POPULATION_NUMBER; i += 2) {
            // Selection
            const father = population[selection(fitnesses)];
            const mother = population[selection(fitnesses)];
            // Reproduction
            let children = utils_1.random() < CROSSOVER_RATE ? crossover(father, mother) : [father, mother];
            // Mutation
            children = children.map((child) => utils_1.random() < MUTATION_RATE ? mutate(child, unlockedIndexs, simulationType, colorModel) : child);
            newPopulation.push(...children);
        }
        population = newPopulation;
        fitnesses = population.map((colors) => exports.calFitness(colors, locked, simulationType, colorModel, colorDifference, backgroundColor));
        const newBestFitness = Math.max(...fitnesses);
        bestFitness = newBestFitness;
        elites = population[fitnesses.findIndex((d) => d === newBestFitness)];
        cnt += 1;
    }
    return elites;
};
exports.optimizePaletteByGA = optimizePaletteByGA;
//# sourceMappingURL=optimizePaletteByGA.js.map