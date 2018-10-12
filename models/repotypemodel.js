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
let RepoTypeModel = class RepoTypeModel {
};
__decorate([
    decorators_1.column({ name: "Id", type: Sequelize.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true }), 
    __metadata('design:type', Number)
], RepoTypeModel.prototype, "_id", void 0);
__decorate([
    decorators_1.column({ name: "projectname", type: Sequelize.STRING }), 
    __metadata('design:type', String)
], RepoTypeModel.prototype, "Projectname", void 0);
__decorate([
    decorators_1.column({ name: "reponame", type: Sequelize.STRING }), 
    __metadata('design:type', String)
], RepoTypeModel.prototype, "Reponame", void 0);
__decorate([
    decorators_1.column({ name: "repotype", type: Sequelize.STRING, allowNull: true }), 
    __metadata('design:type', String)
], RepoTypeModel.prototype, "Repotype", void 0);
RepoTypeModel = __decorate([
    decorators_1.entity({ name: 'repotype', tableName: 'repotype_maitri', timestamps: false, freezeTableName: true }), 
    __metadata('design:paramtypes', [])
], RepoTypeModel);
exports.RepoTypeModel = RepoTypeModel;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = RepoTypeModel;

//# sourceMappingURL=repotypemodel.js.map
