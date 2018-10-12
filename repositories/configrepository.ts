import * as decorator from "nodedata/core/decorators/repository";
import {ConfigModel} from '../models/configmodel';
import { DynamicRepository } from "nodedata/core/dynamic/dynamic-repository";

@decorator.repository({ path: 'config', model: ConfigModel })
//@decorator.repository('blog', BlogModel)
export default class ConfigRepository extends DynamicRepository {

}