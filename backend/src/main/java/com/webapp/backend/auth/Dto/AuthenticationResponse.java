package com.webapp.backend.auth.Dto;

import com.webapp.backend.user.UserDTO;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class AuthenticationResponse {

    private String token;
    private UserDTO user;
}
