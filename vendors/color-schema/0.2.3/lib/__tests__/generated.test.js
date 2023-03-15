"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const ajv_1 = (0, tslib_1.__importDefault)(require("ajv"));
const jest_json_schema_1 = require("jest-json-schema");
const color_schema_json_1 = (0, tslib_1.__importDefault)(require("../build/color-schema.json"));
const classic_json_1 = (0, tslib_1.__importDefault)(require("../examples/classic.json"));
expect.extend((0, jest_json_schema_1.matchersWithOptions)({
    schemas: [color_schema_json_1.default],
}));
const colorAssets = classic_json_1.default;
describe('test', () => {
    test('schema itself is valid', () => {
        expect(color_schema_json_1.default).toBeValidSchema();
    });
    it('schema validate', () => {
        // by jest-json-schema (powered by ajv)
        expect(colorAssets).toMatchSchema(color_schema_json_1.default);
        // by ajv
        const ajv = new ajv_1.default();
        const validate = ajv.compile(color_schema_json_1.default);
        const valid = validate(colorAssets);
        expect(valid).toBe(true);
    });
});
//# sourceMappingURL=generated.test.js.map