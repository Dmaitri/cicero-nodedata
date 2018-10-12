import { column, entity } from 'nodedata/sequelizeimp/decorators';
import * as Sequelize from "sequelize";


@entity({ name: 'Config_maitri', tableName: 'Config_maitri', timestamps: false, freezeTableName: true })
export class ConfigModel {
    @column({ name: "id", type: Sequelize.INTEGER, allowNull: false, primaryKey: true,autoIncrement:true })
    _id: number;

    @column({ name: "Projectname", type: Sequelize.STRING })
    Projectname: string;

    @column({ name: "anamolyLOCCountPerCommit", type: Sequelize.INTEGER, allowNull: false })
    AnamolyLOCCountPerCommit: number;

    @column({ name: "anamolyLOCCount", type: Sequelize.INTEGER, allowNull: false })
    AnamolyLOCCount: number;

    @column({ name: "ciceroServerPort", type: Sequelize.INTEGER, allowNull: false })
    CiceroServerPort: number;

    @column({ name: "ciceroServerHost", type: Sequelize.STRING, allowNull: false })
    CiceroServerHost: string;

    @column({ name: "cleanuprepos", type: Sequelize.STRING, allowNull: false })
    Cleanuprepos: string;

    @column({ name: "repospath", type: Sequelize.STRING, allowNull: false })
    Repospath: string;

    @column({ name: "sonarCommand", type: Sequelize.STRING, allowNull: false })
    SonarCommand: string;

    @column({ name: "sonarCommandWithoutType", type: Sequelize.STRING, allowNull: false })
    SonarCommandWithoutType: string;

    @column({ name: "exCludeFiles", type: Sequelize.STRING, allowNull: false })
    exCludeFiles: string;
}

export default ConfigModel;