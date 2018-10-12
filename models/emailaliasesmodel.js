"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const decorators_1 = require('nodedata/sequelizeimp/decorators');
const Sequelize = require("sequelize");
let EmailAliasesModel = class EmailAliasesModel {
};
__decorate([
    decorators_1.column({ name: "id", type: Sequelize.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true }), 
    __metadata('design:type', Number)
], EmailAliasesModel.prototype, "_id", void 0);
__decorate([
    decorators_1.column({ name: "projectname", type: Sequelize.STRING }), 
    __metadata('design:type', String)
], EmailAliasesModel.prototype, "Projectname", void 0);
__decorate([
    decorators_1.column({ name: "email", type: Sequelize.STRING, allowNull: false }), 
    __metadata('design:type', String)
], EmailAliasesModel.prototype, "Email", void 0);
__decorate([
    decorators_1.column({ name: "alias", type: Sequelize.STRING, allowNull: false }), 
    __metadata('design:type', String)
], EmailAliasesModel.prototype, "Alias", void 0);
EmailAliasesModel = __decorate([
    decorators_1.entity({ name: 'emailaliases', tableName: 'emailaliases_maitri', timestamps: false, freezeTableName: true }), 
    __metadata('design:paramtypes', [])
], EmailAliasesModel);
exports.EmailAliasesModel = EmailAliasesModel;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = EmailAliasesModel;

//# sourceMappingURL=emailaliasesmodel.js.map
