package com.webapp.backend.components.patient;

import com.webapp.backend.components.clinicalRecord.ClinicalRecord;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@Table(name = "patient")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Patient {
    @Id
    @Column(name = "patient_id", nullable = false)
    private int patientId;

    @Column(nullable = false)
    private int dni;

    @Column(name = "first_name", nullable = false)
    private String firstName;

    @Column(name = "last_name", nullable = false)
    private String lastName;

    @Column(name = "gender", nullable = false)
    private String gender;

    @Column(name = "address", nullable = false)
    private String address;

    @Column(name = "cellphone", nullable = false)
    private String cellphone;

    @Column(name = "email", nullable = false)
    private String email;

    @OneToMany(targetEntity = ClinicalRecord.class, mappedBy = "patient", fetch = FetchType.EAGER)
    private List<ClinicalRecord> clinicalRecord;

    @Override
    public String toString() {
        return "Patient{" +
                "patientId=" + patientId +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", gender='" + gender + '\'' +
                ", address='" + address + '\'' +
                ", cellphone='" + cellphone + '\'' +
                ", email='" + email + '\'';
    }
}