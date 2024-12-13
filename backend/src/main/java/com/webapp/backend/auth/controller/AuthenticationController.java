package com.webapp.backend.auth.controller;

import com.webapp.backend.auth.Dto.AuthenticationRequest;
import com.webapp.backend.auth.Dto.AuthenticationResponse;
import com.webapp.backend.auth.Dto.RegistrationRequest;
import com.webapp.backend.auth.service.AuthenticationService;
import com.webapp.backend.user.User;
import com.webapp.backend.user.Repository.UserRepository;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.mail.MessagingException;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("")
@RequiredArgsConstructor
@Tag(name="Authentication")
public class AuthenticationController {

    private final AuthenticationService service;
    private final UserRepository userRepository;

    @PostMapping("/checkin")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public ResponseEntity<User> register(@RequestBody @Valid RegistrationRequest request) throws MessagingException {
        var savedUser = service.register(request);
        return ResponseEntity.status(201).body(savedUser);
    }

    @PostMapping("/login")
    public ResponseEntity<AuthenticationResponse> authenticate(
            @RequestBody @Valid AuthenticationRequest request
    ) {

        User user = userRepository.findByEmail(request.getEmail())
                .orElseThrow(() -> new RuntimeException("User not found"));

        if (!user.isEnabled()) {
            throw new RuntimeException("Account not verified yet. Please check your email.");
        }

        return ResponseEntity.ok(service.authenticate(request));
    }
}
