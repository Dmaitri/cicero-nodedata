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
let ProcessStatusModel = class ProcessStatusModel {
};
__decorate([
    decorators_1.column({ name: "id", type: Sequelize.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true }), 
    __metadata('design:type', Number)
], ProcessStatusModel.prototype, "_id", void 0);
__decorate([
    decorators_1.column({ name: "projectname", type: Sequelize.STRING }), 
    __metadata('design:type', String)
], ProcessStatusModel.prototype, "Projectname", void 0);
__decorate([
    decorators_1.column({ name: "checkEnvironment", type: Sequelize.BOOLEAN }), 
    __metadata('design:type', Boolean)
], ProcessStatusModel.prototype, "CheckEnvironment", void 0);
__decorate([
    decorators_1.column({ name: "main", type: Sequelize.BOOLEAN, allowNull: false }), 
    __metadata('design:type', Boolean)
], ProcessStatusModel.prototype, "Main", void 0);
__decorate([
    decorators_1.column({ name: "mainGitAnalysis", type: Sequelize.BOOLEAN, allowNull: false }), 
    __metadata('design:type', Boolean)
], ProcessStatusModel.prototype, "MainGitAnalysis", void 0);
__decorate([
    decorators_1.column({ name: "prepareConfigurationList", type: Sequelize.BOOLEAN, allowNull: true }), 
    __metadata('design:type', Boolean)
], ProcessStatusModel.prototype, "PrepareConfigurationList", void 0);
__decorate([
    decorators_1.column({ name: "mainCiceroAnalysis", type: Sequelize.BOOLEAN, allowNull: true }), 
    __metadata('design:type', Boolean)
], ProcessStatusModel.prototype, "MainCiceroAnalysis", void 0);
__decorate([
    decorators_1.column({ name: "mainSonarAnalysis", type: Sequelize.BOOLEAN, allowNull: true }), 
    __metadata('design:type', Boolean)
], ProcessStatusModel.prototype, "MainSonarAnalysis", void 0);
__decorate([
    decorators_1.column({ name: "sonarAnalysis", type: Sequelize.BOOLEAN, allowNull: true }), 
    __metadata('design:type', Boolean)
], ProcessStatusModel.prototype, "SonarAnalysis", void 0);
__decorate([
    decorators_1.column({ name: "productivityjob", type: Sequelize.BOOLEAN, allowNull: true }), 
    __metadata('design:type', Boolean)
], ProcessStatusModel.prototype, "Productivityjob", void 0);
__decorate([
    decorators_1.column({ name: "sonarETL", type: Sequelize.BOOLEAN, allowNull: true }), 
    __metadata('design:type', Boolean)
], ProcessStatusModel.prototype, "SonarETL", void 0);
__decorate([
    decorators_1.column({ name: "analytics", type: Sequelize.BOOLEAN, allowNull: true }), 
    __metadata('design:type', Boolean)
], ProcessStatusModel.prototype, "Analytics", void 0);
__decorate([
    decorators_1.column({ name: "prepareMainStatus", type: Sequelize.BOOLEAN, allowNull: true }), 
    __metadata('design:type', Boolean)
], ProcessStatusModel.prototype, "PrepareMainStatus", void 0);
__decorate([
    decorators_1.column({ name: "combineCeicroModelsOfall", type: Sequelize.BOOLEAN, allowNull: true }), 
    __metadata('design:type', Boolean)
], ProcessStatusModel.prototype, "CombineCeicroModelsOfall", void 0);
ProcessStatusModel = __decorate([
    decorators_1.entity({ name: 'processstatus', tableName: 'processstatus_maitri', timestamps: false, freezeTableName: true }), 
    __metadata('design:paramtypes', [])
], ProcessStatusModel);
exports.ProcessStatusModel = ProcessStatusModel;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ProcessStatusModel;

//# sourceMappingURL=processstatusmodel.js.map
