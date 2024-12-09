package com.webapp.backend.components.patient;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.*;

import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
public class PatientDTO {
    @NotNull(message = "dni is mandatory")
    private Integer dni;
    @NotEmpty(message = "firstName is mandatory")
    private String firstName;
    @NotEmpty(message = "lastName is mandatory")
    private String lastName;
    @NotEmpty(message = "gender is mandatory")
    private String gender;
    @NotNull(message = "birthday is mandatory")
    @JsonFormat(pattern = "dd-MM-yyyy")
    private LocalDate birthday;
    @NotEmpty(message = "address is mandatory")
    private String address;
    @NotEmpty(message = "cellphone is mandatory")
    private String cellphone;
    @NotEmpty(message = "email is mandatory")
    private String email;

    public PatientDTO (Patient patient){
        this.dni = patient.getDni();
        this.firstName = patient.getFirstName();
        this.lastName = patient.getLastName();
        this.gender = patient.getGender();
        this.birthday = patient.getBirthday();
        this.address = patient.getAddress();
        this.cellphone = patient.getCellphone();
        this.email = patient.getEmail();
    }
}
