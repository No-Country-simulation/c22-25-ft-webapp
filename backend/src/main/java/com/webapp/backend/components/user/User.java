package com.webapp.backend.components.user;

import com.webapp.backend.components.clinicalRecord.ClinicalRecord;
import com.webapp.backend.components.role.Role;
import com.webapp.backend.components.specialtyArea.SpecialtyArea_User;
import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "users")
public class User {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private int userId;

  @Column(name = "first_name", nullable = false)
  private String firstName;

  @Column(name = "last_name", nullable = false)
  private String lastName;

  @Column(name = "password", nullable = false)
  private String password;

  @Column(name = "email", nullable = false)
  private String email;

  @ManyToOne(targetEntity = Role.class)
  @JoinColumn(name = "role_id")
  private Role role;

  @OneToMany(targetEntity = ClinicalRecord.class, fetch = FetchType.EAGER, mappedBy = "user")
  private List<ClinicalRecord> clinicalRecord;

  @OneToMany(targetEntity = SpecialtyArea_User.class, fetch = FetchType.EAGER, mappedBy = "user")
  private List<SpecialtyArea_User> specialtyAreaUsers;

  public User() {
  }

  public User(int userId, String firstName, String lastName, String password, String email, Role role) {
    this.userId = userId;
    this.firstName = firstName;
    this.lastName = lastName;
    this.password = password;
    this.email = email;
    this.role = role;
  }

  public int getUserId() {
    return userId;
  }

  public void setUserId(int userId) {
    this.userId = userId;
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

  public String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    this.password = password;
  }

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public Role getRole() {
    return role;
  }

  public void setRole(Role role) {
    this.role = role;
  }

  @Override
  public String toString() {
    return "User{" +
            "userId=" + userId +
            ", name='" + firstName + '\'' +
            ", lastName='" + lastName + '\'' +
            ", password='" + password + '\'' +
            ", email='" + email + '\'' +
            ", role=" + role +
            '}';
  }
}
