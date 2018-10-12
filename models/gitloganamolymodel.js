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
let GitLogAnamolyModel = class GitLogAnamolyModel {
};
__decorate([
    decorators_1.column({ name: "id", type: Sequelize.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true }), 
    __metadata('design:type', Number)
], GitLogAnamolyModel.prototype, "_id", void 0);
__decorate([
    decorators_1.column({ name: "projectname", type: Sequelize.STRING }), 
    __metadata('design:type', String)
], GitLogAnamolyModel.prototype, "Projectname", void 0);
__decorate([
    decorators_1.column({ name: "author", type: Sequelize.STRING }), 
    __metadata('design:type', Object)
], GitLogAnamolyModel.prototype, "Author", void 0);
__decorate([
    decorators_1.column({ name: "commit", type: Sequelize.STRING, allowNull: false }), 
    __metadata('design:type', String)
], GitLogAnamolyModel.prototype, "Commit", void 0);
__decorate([
    decorators_1.column({ name: "date", type: Sequelize.DATE, allowNull: false }), 
    __metadata('design:type', Date)
], GitLogAnamolyModel.prototype, "Date", void 0);
__decorate([
    decorators_1.column({ name: "deletions", type: Sequelize.INTEGER, allowNull: false }), 
    __metadata('design:type', Number)
], GitLogAnamolyModel.prototype, "Deletions", void 0);
__decorate([
    decorators_1.column({ name: "insertions", type: Sequelize.INTEGER, allowNull: false }), 
    __metadata('design:type', Date)
], GitLogAnamolyModel.prototype, "Insertions", void 0);
__decorate([
    decorators_1.column({ name: "isAnamoly", type: Sequelize.BOOLEAN, allowNull: false }), 
    __metadata('design:type', Boolean)
], GitLogAnamolyModel.prototype, "IsAnamoly", void 0);
__decorate([
    decorators_1.column({ name: "message", type: Sequelize.STRING, allowNull: false }), 
    __metadata('design:type', String)
], GitLogAnamolyModel.prototype, "Message", void 0);
__decorate([
    decorators_1.column({ name: "paths_insertion", type: Sequelize.STRING, allowNull: false }), 
    __metadata('design:type', String)
], GitLogAnamolyModel.prototype, "Paths_insertion", void 0);
__decorate([
    decorators_1.column({ name: "paths_deletion", type: Sequelize.STRING, allowNull: false }), 
    __metadata('design:type', String)
], GitLogAnamolyModel.prototype, "Paths_deletion", void 0);
__decorate([
    decorators_1.column({ name: "paths_path", type: Sequelize.STRING, allowNull: false }), 
    __metadata('design:type', String)
], GitLogAnamolyModel.prototype, "Paths_path", void 0);
__decorate([
    decorators_1.column({ name: "paths_isAnamoly", type: Sequelize.BOOLEAN, allowNull: false }), 
    __metadata('design:type', Boolean)
], GitLogAnamolyModel.prototype, "Paths_isAnamoly", void 0);
__decorate([
    decorators_1.column({ name: "reponame", type: Sequelize.STRING, allowNull: false }), 
    __metadata('design:type', String)
], GitLogAnamolyModel.prototype, "Reponame", void 0);
GitLogAnamolyModel = __decorate([
    decorators_1.entity({ name: 'gitloganamoly', tableName: 'gitloganamoly_maitri', timestamps: false, freezeTableName: true }), 
    __metadata('design:paramtypes', [])
], GitLogAnamolyModel);
exports.GitLogAnamolyModel = GitLogAnamolyModel;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = GitLogAnamolyModel;

//# sourceMappingURL=gitloganamolymodel.js.map
