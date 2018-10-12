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
let ProjectModel = class ProjectModel {
};
__decorate([
    decorators_1.column({ name: "id", type: Sequelize.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true }), 
    __metadata('design:type', Number)
], ProjectModel.prototype, "_id", void 0);
__decorate([
    decorators_1.column({ name: "Name", type: Sequelize.STRING }), 
    __metadata('design:type', String)
], ProjectModel.prototype, "Name", void 0);
__decorate([
    decorators_1.column({ name: "Uniqueid", type: Sequelize.UUID }), 
    __metadata('design:type', Object)
], ProjectModel.prototype, "Uniqueid", void 0);
__decorate([
    decorators_1.column({ name: "ConfigSynStatus", type: Sequelize.INTEGER, allowNull: true }), 
    __metadata('design:type', Number)
], ProjectModel.prototype, "ConfigSynStatus", void 0);
__decorate([
    decorators_1.column({ name: "LastConfigSyncDate", type: Sequelize.DATE, allowNull: true }), 
    __metadata('design:type', Date)
], ProjectModel.prototype, "LastConfigSyncDate", void 0);
__decorate([
    decorators_1.column({ name: "UpdateReportStatus", type: Sequelize.INTEGER, allowNull: true }), 
    __metadata('design:type', Number)
], ProjectModel.prototype, "UpdateReportStatus", void 0);
__decorate([
    decorators_1.column({ name: "LastUpdateReportDate", type: Sequelize.DATE, allowNull: true }), 
    __metadata('design:type', Date)
], ProjectModel.prototype, "LastUpdateReportDate", void 0);
__decorate([
    decorators_1.column({ name: "ExecuteProcessStatus", type: Sequelize.INTEGER, allowNull: true }), 
    __metadata('design:type', Number)
], ProjectModel.prototype, "ExecuteProcessStatus", void 0);
__decorate([
    decorators_1.column({ name: "LastExecuteProcessDate", type: Sequelize.DATE, allowNull: true }), 
    __metadata('design:type', Date)
], ProjectModel.prototype, "LastExecuteProcessDate", void 0);
__decorate([
    decorators_1.column({ name: "UpdateConfigStatus", type: Sequelize.INTEGER, allowNull: true }), 
    __metadata('design:type', Number)
], ProjectModel.prototype, "UpdateConfigStatus", void 0);
__decorate([
    decorators_1.column({ name: "LastUpdateConfigDate", type: Sequelize.DATE, allowNull: true }), 
    __metadata('design:type', Date)
], ProjectModel.prototype, "LastUpdateConfigDate", void 0);
ProjectModel = __decorate([
    decorators_1.entity({ name: 'projects', tableName: 'projects', timestamps: false, freezeTableName: true }), 
    __metadata('design:paramtypes', [])
], ProjectModel);
exports.ProjectModel = ProjectModel;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ProjectModel;

//# sourceMappingURL=projectsmodel.js.map
