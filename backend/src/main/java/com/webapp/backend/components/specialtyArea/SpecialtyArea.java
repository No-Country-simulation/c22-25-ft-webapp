package com.webapp.backend.components.specialtyArea;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "specialty_area")
public class SpecialtyArea {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int specialtyId;

    @Column(name = "name", nullable = false)
    private String name;

    @Lob
    @Column(name = "description", nullable = false, columnDefinition = "TEXT")
    private String description;

    @OneToMany(targetEntity = SpecialtyArea_User.class, fetch = FetchType.EAGER, mappedBy = "specialtyArea")
    private List<SpecialtyArea_User> specialtyAreaUser;

    public SpecialtyArea() {
    }

    public SpecialtyArea(int specialtyId, String name, String description) {
        this.specialtyId = specialtyId;
        this.name = name;
        this.description = description;
    }

    public int getSpecialtyId() {
        return specialtyId;
    }

    public void setSpecialtyId(int specialtyId) {
        this.specialtyId = specialtyId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    @Override
    public String toString() {
        return "SpecialtyArea{" +
                "specialtyId=" + specialtyId +
                ", name='" + name + '\'' +
                ", description=" + description +
                '}';
    }
}
