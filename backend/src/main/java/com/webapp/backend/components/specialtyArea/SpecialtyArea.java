package com.webapp.backend.components.specialtyArea;

import com.webapp.backend.user.User;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@Table(name = "specialty_area")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class SpecialtyArea {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int specialtyId;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "description", nullable = false, columnDefinition = "TEXT")
    private String description;

    @ManyToMany(fetch = FetchType.EAGER, mappedBy = "specialtyArea")
    private List<User> user;

    @Override
    public String toString() {
        return "SpecialtyArea{" +
                "specialtyId=" + specialtyId +
                ", name='" + name + '\'' +
                ", description=" + description +
                '}';
    }
}
