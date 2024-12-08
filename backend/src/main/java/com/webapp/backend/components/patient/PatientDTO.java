package com.webapp.backend.components.patient;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
public class PatientDTO {
    private Integer dni;

    private String firstName;

    private String lastName;

    private String gender;

    private String address;

    private String cellphone;

    private String email;

    public PatientDTO (Patient patient){
        this.dni = patient.getDni();
        this.firstName = patient.getFirstName();
        this.lastName = patient.getLastName();
        this.gender = patient.getGender();
        this.address = patient.getAddress();
        this.cellphone = patient.getCellphone();
        this.email = patient.getEmail();
    }
}
