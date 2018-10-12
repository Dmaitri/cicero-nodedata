import { column, entity } from 'nodedata/sequelizeimp/decorators';
import * as Sequelize from "sequelize";

@entity({ name: 'processstatus', tableName: 'processstatus_maitri', timestamps: false, freezeTableName: true })
export class ProcessStatusModel {
    @column({ name: "id", type: Sequelize.INTEGER, allowNull: false, primaryKey: true,autoIncrement:true })
    _id: number;

    @column({ name: "projectname", type: Sequelize.STRING })
    Projectname: string;

    @column({ name: "checkEnvironment", type: Sequelize.BOOLEAN })
    CheckEnvironment: boolean;

    @column({ name: "main", type: Sequelize.BOOLEAN, allowNull: true })
    Main: boolean;

    @column({ name: "mainGitAnalysis", type: Sequelize.BOOLEAN, allowNull: true })
    MainGitAnalysis: boolean;

    @column({ name: "prepareConfigurationList", type: Sequelize.BOOLEAN, allowNull: true })
    PrepareConfigurationList: boolean;

    @column({ name: "mainCiceroAnalysis", type: Sequelize.BOOLEAN, allowNull: true })
    MainCiceroAnalysis: boolean;

    @column({ name: "mainSonarAnalysis", type: Sequelize.BOOLEAN, allowNull: true })
    MainSonarAnalysis: boolean;

    @column({ name: "sonarAnalysis", type: Sequelize.BOOLEAN, allowNull: true })
    SonarAnalysis: boolean;

    @column({ name: "productivityjob", type: Sequelize.BOOLEAN, allowNull: true })
    Productivityjob: boolean;

    @column({ name: "sonarETL", type: Sequelize.BOOLEAN, allowNull: true })
    SonarETL: boolean;

    @column({ name: "analytics", type: Sequelize.BOOLEAN, allowNull: true })
    Analytics: boolean;

    @column({ name: "prepareMainStatus", type: Sequelize.BOOLEAN, allowNull: true })
    PrepareMainStatus: boolean;

    @column({ name: "combineCeicroModelsOfall", type: Sequelize.BOOLEAN, allowNull: true })
    CombineCeicroModelsOfall: boolean;

    static InitialValues(projectName:string){
        let processStatus:ProcessStatusModel=new ProcessStatusModel();
        processStatus.Projectname=projectName;
        processStatus.CheckEnvironment = true;
        processStatus.Main = true;
        processStatus.MainGitAnalysis = true;
        processStatus.MainCiceroAnalysis = true;
        processStatus.MainSonarAnalysis = true;
        processStatus.PrepareMainStatus = true;
        processStatus.CombineCeicroModelsOfall = true;
        processStatus.SonarETL = true;
        processStatus.Analytics = true;
        processStatus.Productivityjob = true;
        processStatus.SonarAnalysis = true;
        processStatus.PrepareConfigurationList = true;
        return processStatus;

    }
}

export default ProcessStatusModel;