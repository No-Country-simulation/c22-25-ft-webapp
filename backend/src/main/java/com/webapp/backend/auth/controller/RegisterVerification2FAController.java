package com.webapp.backend.auth.controller;

import com.webapp.backend.user.Token;
import com.webapp.backend.user.User;
import com.webapp.backend.user.Repository.TokenRepository;
import com.webapp.backend.user.Repository.UserRepository;
import com.webapp.backend.user.UserService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import java.time.LocalDateTime;

@RestController
@AllArgsConstructor
@RequestMapping("/verifyRegister")
public class RegisterVerification2FAController {

    private final UserService userService;
    private final UserRepository userRepository;
    private final TokenRepository tokenRepository;


    @Operation(summary = "Verify account with a token")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Account successfully verified"),
            @ApiResponse(responseCode = "400", description = "Invalid or expired token"),
            @ApiResponse(responseCode = "403", description = "Account already verified")
    })
    @PostMapping("/verify")
    public ResponseEntity<String> verifyAccount(@RequestParam String token) {
        Token verificationToken = tokenRepository.findByToken(token)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.BAD_REQUEST, "Invalid token"));

        if (verificationToken.getExpiresAt().isBefore(LocalDateTime.now())) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Token has expired");
        }

        User user = verificationToken.getUser();

        if (user.isEnabled()) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body("Account is already verified");
        }

        user.setEnabled(true);
        userRepository.save(user);

        return ResponseEntity.ok("Account successfully verified!");
    }
}
