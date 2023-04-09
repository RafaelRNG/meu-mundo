package br.com.rng.backend.configuracoes;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.Environment;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.DefaultSecurityFilterChain;
import org.springframework.web.servlet.config.annotation.CorsRegistration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
@EnableWebSecurity
public class SegurancaConfiguracao {

   @Autowired
   private Environment ambiente;

   @Bean
   public DefaultSecurityFilterChain segurancaHttp(HttpSecurity http) throws Exception {

      if (Arrays.asList(this.ambiente.getActiveProfiles()).contains("test")) {
         http.headers().frameOptions().disable();
      }

      http.authorizeHttpRequests()
            .anyRequest()
            .permitAll();

      http.cors().and().csrf().disable();

      return http.build();
   }

   @Bean
   public WebMvcConfigurer configuracaoWeb() {
      return new WebMvcConfigurer() {

         @Override
         public void addCorsMappings(CorsRegistry registro) {
            registro.addMapping("/**").allowedOrigins("http://localhost:4200");
         }
      };
   }
}