import { column, entity } from 'nodedata/sequelizeimp/decorators';
import * as Sequelize from "sequelize";


@entity({ name: 'Config_maitri', tableName: 'Config_maitri', timestamps: false, freezeTableName: true })
export class ConfigModel {
    @column({ name: "id", type: Sequelize.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true })
    _id: number;

    @column({ name: "Projectname", type: Sequelize.STRING })
    Projectname: string;

    @column({ name: "anamolyLOCCountPerCommit", type: Sequelize.INTEGER, allowNull: true })
    AnamolyLOCCountPerCommit: number;

    @column({ name: "anamolyLOCCount", type: Sequelize.INTEGER, allowNull: true })
    AnamolyLOCCount: number;

    @column({ name: "ciceroServerPort", type: Sequelize.INTEGER, allowNull: true })
    CiceroServerPort: number;

    @column({ name: "ciceroServerHost", type: Sequelize.STRING, allowNull: true })
    CiceroServerHost: string;

    @column({ name: "cleanuprepos", type: Sequelize.STRING, allowNull: true })
    Cleanuprepos: string;

    @column({ name: "repospath", type: Sequelize.STRING, allowNull: true })
    Repospath: string;

    @column({ name: "sonarCommand", type: Sequelize.STRING, allowNull: true })
    SonarCommand: string;

    @column({ name: "sonarCommandWithoutType", type: Sequelize.STRING, allowNull: true })
    SonarCommandWithoutType: string;

    @column({ name: "exCludeFiles", type: Sequelize.STRING, allowNull: true })
    exCludeFiles: string;

    static InitialValues(projectName:string):ConfigModel {
        let config: ConfigModel = new ConfigModel();
        config.Projectname = projectName;
        config.AnamolyLOCCountPerCommit = 5000;
        config.AnamolyLOCCount = 1000;
        config.CiceroServerPort = 9393;
        config.CiceroServerHost = "172.19.101.120";
        config.Cleanuprepos = "Drones-SW-DartService,Drones-SW-DartService";
        config.Repospath = "repos";
        config.SonarCommand = "\"../../sonar-scanner/bin/sonar-scanner.bat\" -Dsonar.host.url=http://172.19.101.120:9393 -Dsonar.login=2dcd3909dd3091d5b81cf5fbe1eede589bf8f221 -Dsonar.java.binaries=../../sonar-scanner/lib/ -Dsonar.projectName=$reponame -Dsonar.projectKey=$reponame -Dsonar.sources=./ -Dsonar.language=$repotype";
        config.SonarCommandWithoutType = "\"../../sonar-scanner/bin/sonar-scanner\" -Dsonar.host.url=http://172.19.101.120:9393 -Dsonar.login=2dcd3909dd3091d5b81cf5fbe1eede589bf8f221 -Dsonar.java.binaries=../../sonar-scanner/lib/ -Dsonar.projectName=$reponame -Dsonar.projectKey=$reponame -Dsonar.sources=./ ";
        config.exCludeFiles = "package-lock.json";
        return config;
    }
}

export default ConfigModel;