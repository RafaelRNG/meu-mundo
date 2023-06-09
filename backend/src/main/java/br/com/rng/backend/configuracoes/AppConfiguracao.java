package br.com.rng.backend.configuracoes;

import java.util.Arrays;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

@Configuration
public class AppConfiguracao {

   @Bean
   public CorsConfigurationSource corsConfiguration() {
      CorsConfiguration cors = new CorsConfiguration();
      cors.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE", "PATCH", "HEAD", "OPTIONS"));

      UrlBasedCorsConfigurationSource urlCors = new UrlBasedCorsConfigurationSource();
      urlCors.registerCorsConfiguration("/**", cors);

      return urlCors;
   }
}