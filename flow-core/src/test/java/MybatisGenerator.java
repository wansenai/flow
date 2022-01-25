//import com.baomidou.mybatisplus.annotation.IdType;
//import com.baomidou.mybatisplus.generator.AutoGenerator;
//import com.baomidou.mybatisplus.generator.config.DataSourceConfig;
//import com.baomidou.mybatisplus.generator.config.GlobalConfig;
//import com.baomidou.mybatisplus.generator.config.PackageConfig;
//import com.baomidou.mybatisplus.generator.config.StrategyConfig;
//import com.baomidou.mybatisplus.generator.config.rules.NamingStrategy;
//
///**
// * @program: flow
// * @description: 代码生成
// * @author: Bruce.Liu
// * @create: 2021-03-29 10:25
// **/
//public class MybatisGenerator {
//    public static void main(String[] args) {
//        AutoGenerator mpg = new AutoGenerator();
//        //1、全局配置
//        GlobalConfig gc = new GlobalConfig();
//        String projectPath = System.getProperty("user.dir");
//        gc.setOutputDir(projectPath + "/src/main/generator");  //生成路径(一般都是生成在此项目的src/main/java下面)
//        gc.setAuthor("bruce.liu"); //设置作者
//        gc.setOpen(false);
//        gc.setFileOverride(true); //第二次生成会把第一次生成的覆盖掉
//        gc.setMapperName("I%sMapper");
//        gc.setServiceName("I%sService"); //生成的service接口名字首字母是否为I，这样设置就没有
//        gc.setBaseResultMap(true); //生成resultMap
//        gc.setBaseColumnList(true);//生成统一的列
//        gc.setControllerName("%sResource");
//        gc.setIdType(IdType.ASSIGN_UUID);
//        mpg.setGlobalConfig(gc);
//
//        //2、数据源配置
//        DataSourceConfig dsc = new DataSourceConfig();
//        dsc.setUrl("jdbc:mysql://192.168.88.174:3306/flow-6.6?autoReconnect=true&useUnicode=true&characterEncoding=utf8&zeroDateTimeBehavior=CONVERT_TO_NULL&useSSL=false&serverTimezone=GMT%2B8&nullCatalogMeansCurrent=true");
//        dsc.setDriverName("com.mysql.cj.jdbc.Driver");
//        dsc.setUsername("root");
//        dsc.setPassword("123456");
//        mpg.setDataSource(dsc);
//
//        // 3、包配置
//        PackageConfig pc = new PackageConfig();
////        pc.setModuleName("base");
//        //TODO 修改模块名称
//        String moduleName = "front";
//        pc.setParent("com.dragon.flow");
//        pc.setEntity("model." + moduleName);
//        pc.setMapper("mapper." + moduleName);
//        pc.setService("service." + moduleName);
//        pc.setServiceImpl("service." + moduleName + ".impl");
//        pc.setController("web." + moduleName + ".resource");
//        mpg.setPackageInfo(pc);
//
//        // 4、策略配置
//        StrategyConfig strategy = new StrategyConfig();
//        strategy.setRestControllerStyle(true);
//        strategy.setNaming(NamingStrategy.underline_to_camel);
//        strategy.setColumnNaming(NamingStrategy.underline_to_camel);
//        strategy.setSuperControllerClass("com.dragon.flow.web.resource.BaseResource");
//        strategy.setSuperEntityClass("com.dragon.tools.common.BaseModel");
//        // TODO 修改表的前缀
//        strategy.setTablePrefix("tbl_front_"); // 表名前缀
//        strategy.setEntityLombokModel(true); //使用lombok
//        //TODO 修改表名
//        strategy.setInclude(new String[]{"tbl_front_account"});  // 逆向工程使用的表   如果要生成多个,这里可以传入String[]
//        mpg.setStrategy(strategy);
//
//        //5、执行
//        mpg.execute();
//    }
//}
