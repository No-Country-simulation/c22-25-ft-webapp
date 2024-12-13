package com.webapp.backend.user;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class PasswordDTO {

    @NotEmpty
    String currentPassword;
    @NotEmpty
    @Size(min = 8, message = "Password should be 8 characters long minimum")
    String newPassword;
}
