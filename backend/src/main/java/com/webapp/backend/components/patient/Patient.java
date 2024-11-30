package com.webapp.backend.components.patient;

import com.webapp.backend.components.clinicalRecord.ClinicalRecord;
import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "patient")
public class Patient {
    @Id
    @Column(name = "patient_id", nullable = false)
    private int patientId;

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

    public Patient() {
    }

    public Patient(int patientId, String firstName, String lastName, String gender, String address, String cellphone, String email) {
        this.patientId = patientId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.address = address;
        this.cellphone = cellphone;
        this.email = email;
    }

    public int getPatientId() {
        return patientId;
    }

    public void setPatientId(int patientId) {
        this.patientId = patientId;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getCellphone() {
        return cellphone;
    }

    public void setCellphone(String cellphone) {
        this.cellphone = cellphone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

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