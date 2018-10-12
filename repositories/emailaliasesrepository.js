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
const decorator = require("nodedata/core/decorators/repository");
const emailaliasesmodel_1 = require('../models/emailaliasesmodel');
const dynamic_repository_1 = require("nodedata/core/dynamic/dynamic-repository");
let emailaliasRepository = class emailaliasRepository extends dynamic_repository_1.DynamicRepository {
};
emailaliasRepository = __decorate([
    decorator.repository({ path: 'emailalias', model: emailaliasesmodel_1.EmailAliasesModel }), 
    __metadata('design:paramtypes', [])
], emailaliasRepository);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = emailaliasRepository;

//# sourceMappingURL=emailaliasesrepository.js.map
