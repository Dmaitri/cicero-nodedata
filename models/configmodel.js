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
let ConfigModel = class ConfigModel {
};
__decorate([
    decorators_1.column({ name: "id", type: Sequelize.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true }), 
    __metadata('design:type', Number)
], ConfigModel.prototype, "_id", void 0);
__decorate([
    decorators_1.column({ name: "Projectname", type: Sequelize.STRING }), 
    __metadata('design:type', String)
], ConfigModel.prototype, "Projectname", void 0);
__decorate([
    decorators_1.column({ name: "anamolyLOCCountPerCommit", type: Sequelize.INTEGER, allowNull: false }), 
    __metadata('design:type', Number)
], ConfigModel.prototype, "AnamolyLOCCountPerCommit", void 0);
__decorate([
    decorators_1.column({ name: "anamolyLOCCount", type: Sequelize.INTEGER, allowNull: false }), 
    __metadata('design:type', Number)
], ConfigModel.prototype, "AnamolyLOCCount", void 0);
__decorate([
    decorators_1.column({ name: "ciceroServerPort", type: Sequelize.INTEGER, allowNull: false }), 
    __metadata('design:type', Number)
], ConfigModel.prototype, "CiceroServerPort", void 0);
__decorate([
    decorators_1.column({ name: "ciceroServerHost", type: Sequelize.STRING, allowNull: false }), 
    __metadata('design:type', String)
], ConfigModel.prototype, "CiceroServerHost", void 0);
__decorate([
    decorators_1.column({ name: "cleanuprepos", type: Sequelize.STRING, allowNull: false }), 
    __metadata('design:type', String)
], ConfigModel.prototype, "Cleanuprepos", void 0);
__decorate([
    decorators_1.column({ name: "repospath", type: Sequelize.STRING, allowNull: false }), 
    __metadata('design:type', String)
], ConfigModel.prototype, "Repospath", void 0);
__decorate([
    decorators_1.column({ name: "sonarCommand", type: Sequelize.STRING, allowNull: false }), 
    __metadata('design:type', String)
], ConfigModel.prototype, "SonarCommand", void 0);
__decorate([
    decorators_1.column({ name: "sonarCommandWithoutType", type: Sequelize.STRING, allowNull: false }), 
    __metadata('design:type', String)
], ConfigModel.prototype, "SonarCommandWithoutType", void 0);
__decorate([
    decorators_1.column({ name: "exCludeFiles", type: Sequelize.STRING, allowNull: false }), 
    __metadata('design:type', String)
], ConfigModel.prototype, "exCludeFiles", void 0);
ConfigModel = __decorate([
    decorators_1.entity({ name: 'Config_maitri', tableName: 'Config_maitri', timestamps: false, freezeTableName: true }), 
    __metadata('design:paramtypes', [])
], ConfigModel);
exports.ConfigModel = ConfigModel;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ConfigModel;

//# sourceMappingURL=configmodel.js.map
