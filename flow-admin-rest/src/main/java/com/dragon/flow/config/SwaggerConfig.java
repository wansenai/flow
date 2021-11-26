package com.dragon.flow.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.Environment;
import org.springframework.core.env.Profiles;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.Contact;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

import java.util.ArrayList;

/**
 * @program: flow
 * @description: 接口配置
 * @author: Bruce.Liu
 * @create: 2021-05-08 14:52
 **/
@Configuration
@EnableSwagger2
public class SwaggerConfig {
    //在构建文档的时候 只显示添加了@Api注解的类
//    @Bean //作为bean纳入spring容器
//    public Docket apiInfo() {
//        return new Docket(DocumentationType.SWAGGER_2).apiInfo(
//                new ApiInfoBuilder()
//                        .contact(new Contact("Bruce.liu", "www.dragon.com", "463805737@qq.com"))
//                        .title("企业级流程中心项目")
//                        .build()
//        );
//
//    }

    private ApiInfo apiInfo() {
        Contact contact = new Contact("Bruce.liu", "www.dragon.com", "463805737@qq.com");
        return new ApiInfo(
                "企业级流程中心项目",
                "流程对外接口",
                "1.0.0",
                "urn:tos",
                contact,
                "Apache 2.0",
                "http://www.apache.org/licenses/LICENSE-2.0",
                new ArrayList<>());
    }

    @Bean
    public Docket docket(Environment environment) {
        //判定springboot的配置文件是否使用dev（开发环境）
        Profiles profiles = Profiles.of("local", "dev");
        boolean flag = environment.acceptsProfiles(profiles);
        return new Docket(DocumentationType.OAS_30)
                //只有当springboot配置文件为dev开发环境时，才开启swaggerAPI文档功能
                .enable(flag)
                .select()
                .apis(RequestHandlerSelectors.basePackage("com.dragon.flow.api.rest"))
                .paths(PathSelectors.any())
                .build()
                .apiInfo(apiInfo());

    }

//    private ApiInfo apiInfo() {
//        return new ApiInfoBuilder()
//                .title("API接口文档")
//                .description("API接口文档，及相关接口的说明")
//                .version("1.0.0")
//                .build();
//    }
}
