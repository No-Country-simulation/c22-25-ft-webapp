package com.webapp.backend;

import com.webapp.backend.role.Role;
import com.webapp.backend.role.RoleRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.scheduling.annotation.EnableAsync;

@SpringBootApplication
@EnableJpaAuditing(auditorAwareRef = "auditorAware")
@EnableAsync
public class BackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(BackendApplication.class, args);
	}

	@Bean
	public CommandLineRunner runner(RoleRepository roleRepository) throws Exception {
		return args -> {
			if (roleRepository.findByName("admin").isEmpty()) {
				roleRepository.save(Role.builder().name("admin").build());
			}

			if (roleRepository.findByName("doctor").isEmpty()) {
				roleRepository.save(Role.builder().name("doctor").build());
			}
		};
	}

}
