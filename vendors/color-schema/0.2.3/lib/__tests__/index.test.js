"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
// import * as colorSchema from "../hand-made-schema.json";
const ajv_1 = (0, tslib_1.__importDefault)(require("ajv"));
const jest_json_schema_1 = require("jest-json-schema");
const colorSchema = (0, tslib_1.__importStar)(require("../build/color-schema.json"));
const classic_json_1 = (0, tslib_1.__importDefault)(require("../examples/classic.json"));
expect.extend((0, jest_json_schema_1.matchersWithOptions)({
    schemas: [colorSchema],
}));
const colorAssets = classic_json_1.default;
describe('test', () => {
    test('schema itself is valid', () => {
        expect(colorSchema).toBeValidSchema();
    });
    it('schema validate', () => {
        // by jest-json-schema (powered by ajv)
        expect(colorAssets).toMatchSchema(colorSchema);
        // by ajv
        const ajv = new ajv_1.default();
        const validate = ajv.compile(colorSchema);
        const valid = validate(colorAssets);
        expect(valid).toBe(true);
    });
});
//# sourceMappingURL=index.test.js.map