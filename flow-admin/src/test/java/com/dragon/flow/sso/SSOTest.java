package com.dragon.flow.sso;

import com.baomidou.kisso.SSOConfig;
import com.baomidou.kisso.common.RsaKeyHelper;
import com.dragon.flow.main.FlowAdminApplication;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.core.io.ClassPathResource;
import org.springframework.test.context.junit4.SpringRunner;

import java.security.Key;
import java.security.PublicKey;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

/**
 * @program: flow
 * @description:
 * @author: Bruce.Liu
 * @create: 2021-05-18 11:14
 **/
@SpringBootTest(classes = FlowAdminApplication.class)
public class SSOTest {

    @Test
    public void testRsa() throws Exception {
        SSOConfig ssoConfig = SSOConfig.getInstance();
        Key key = RsaKeyHelper.getRsaKey(new ClassPathResource(ssoConfig.getRsaJksStore()).getInputStream(),
                ssoConfig.getRsaAlias(), ssoConfig.getRsaKeypass(), ssoConfig.getRsaStorepass());
        Map<String, Object> claims = new HashMap<>();
        claims.put("user", "cope");
        Calendar expires = Calendar.getInstance();
        expires.add(Calendar.HOUR, 2);

        // 加密
        String token = Jwts.builder()
                .setClaims(claims)
                .setSubject("test rsa jwt")
                .setIssuedAt(new Date())
                .setExpiration(expires.getTime())
                .signWith(key, SignatureAlgorithm.RS512)
                .compact();
        System.out.println(token);

        // CRT 证书中读取公钥解密
        PublicKey publicKey = RsaKeyHelper.getRsaPublicKey(new ClassPathResource(ssoConfig.getRsaCertStore()).getInputStream());
        Jws<Claims> crtClaimsJws = Jwts.parserBuilder()
                .setSigningKey(publicKey).build().parseClaimsJws(token);
        System.out.println("crt subject: " + crtClaimsJws.getBody().getSubject());
    }

}
