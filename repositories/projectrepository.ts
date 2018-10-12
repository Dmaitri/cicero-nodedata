import * as decorator from "nodedata/core/decorators/repository";
import {ProjectModel} from '../models/projectsmodel';
import { DynamicRepository } from "nodedata/core/dynamic/dynamic-repository";

@decorator.repository({ path: 'projects', model: ProjectModel })
//@decorator.repository('blog', BlogModel)
export default class ProjectsRepository extends DynamicRepository {

}