package com.webapp.backend.user;

import com.webapp.backend.components.specialtyArea.SpecialtyArea;
import com.webapp.backend.components.specialtyArea.SpecialtyAreaRepository;
import com.webapp.backend.role.Role;
import com.webapp.backend.role.RoleRepository;
import lombok.AllArgsConstructor;

import org.springframework.data.crossstore.ChangeSetPersister.NotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import static org.springframework.data.crossstore.ChangeSetPersister.NotFoundException;

import java.util.ArrayList;
import java.util.List;

@Service
@AllArgsConstructor
public class UserService {
    private final UserRepository userRepository;
    private final RoleRepository roleRepository;
    private final SpecialtyAreaRepository specialtyAreaRepository;
    private final PasswordEncoder passwordEncoder;

    @Transactional
    public void updatePassword(PasswordDTO passwordData, Integer doctorDni){
        User dbUser = userRepository.findByDni(doctorDni).orElseThrow(() -> new RuntimeException("User not found"));

        if(passwordEncoder.matches(passwordData.currentPassword, dbUser.getPassword())){
            dbUser.setPassword(passwordEncoder.encode(passwordData.newPassword));
            userRepository.save(dbUser);
        } else {
            throw new RuntimeException("Current password is not the same that password database");
        }
    }

    public List<UserDTO> getAllUsers(){
        List<User> dbUser = userRepository.findAll();
        return dbUser.stream().map(UserDTO::new).toList();
    }

    public UserDTO getUser(Integer dni){
        User dbUser = userRepository.findByDni(dni).orElseThrow(() -> new RuntimeException("User not found"));
        return new UserDTO(dbUser);
    }

    @Transactional
    public UserDTO saveUser(UserDTO userData){
        List<Role> roles = new ArrayList<>();
        if(!userData.getRoles().isEmpty()){
            userData.getRoles().forEach(role -> {
                roles.add(roleRepository.findByName(role.getName())
                        .orElseThrow(() -> new RuntimeException("Role " + role + "not found", new NotFoundException()))
                );
            });
        } else {
            roles.add(roleRepository.findByName("doctor")
                    .orElseThrow(() -> new RuntimeException("Role admin not found", new NotFoundException()))
            );
        }

        List<SpecialtyArea> specialtyAreas = new ArrayList<>();
        if(!userData.getSpecialtyArea().isEmpty()){
            userData.getSpecialtyArea().forEach(specialty -> {
                specialtyAreas.add(specialtyAreaRepository.findByName(specialty.getName())
                        .orElseThrow(() -> new RuntimeException("Specialty " + specialty.getName() + "not found", new NotFoundException()))
                );
            });
        }

        User newUser = User.builder()
                .dni(userData.getDni())
                .firstName(userData.getFirstName())
                .lastName(userData.getLastName())
                .password(passwordEncoder.encode(String.valueOf(userData.getDni())))
                .email(userData.getEmail())
                .birthday(userData.getBirthday())
                .enabled(true) //Cambiar a false o quitar antes de subir a produccion.
                .role(roles)
                .specialtyArea(specialtyAreas)
                .build();

        User savedUser = userRepository.save(newUser);

        return new UserDTO(savedUser);
    }

    public void activeAccount(Integer dni){
        User userDb = userRepository.findByDni(dni).orElseThrow(() -> new RuntimeException("User not found"));
        userDb.setEnabled(!userDb.isEnabled());

        userRepository.save(userDb);
    }

    @Transactional
    public UserDTO updateUser(UserDTO userData, Integer dni){
        User dbUser = userRepository.findByDni(dni).orElseThrow(() -> new RuntimeException("User not found"));

        List<Role> roles = new ArrayList<>();
        userData.getRoles().forEach(role -> {
            roles.add(roleRepository.findByName(role.getName())
                    .orElseThrow(() -> new RuntimeException("Role " + role + "not found", new NotFoundException()))
            );
        });

        List<SpecialtyArea> specialtyAreas = new ArrayList<>();
        userData.getSpecialtyArea().forEach(specialty -> {
            specialtyAreas.add(specialtyAreaRepository.findByName(specialty.getName())
                    .orElseThrow(() -> new RuntimeException("Specialty " + specialty.getName() + "not found", new NotFoundException()))
            );
        });

        dbUser.setDni(userData.getDni());
        dbUser.setFirstName(userData.getFirstName());
        dbUser.setLastName(userData.getLastName());
        dbUser.setEmail(userData.getEmail());
        dbUser.setBirthday(userData.getBirthday());
        dbUser.setRole(roles);
        dbUser.setSpecialtyArea(specialtyAreas);

        User savedUser = userRepository.save(dbUser);

        return new UserDTO(savedUser);
    }

    @Transactional
    public void deleteUser(Integer dni){
        userRepository.deleteByDni(dni);
    }


    //Funciones para que un doctor pueda alterar solo su propia información
    public UserDTO getDoctor(Integer dni){
        User dbUser = userRepository.findByDni(dni).orElseThrow(() -> new RuntimeException("User not found"));

        return new UserDTO(dbUser);
    }

    @Transactional
    public UserDTO updateDoctor(UserDTO doctorData, Integer dni){
        User dbUser = userRepository.findByDni(dni).orElseThrow(() -> new RuntimeException("User not found"));

        List<SpecialtyArea> specialtyAreas = new ArrayList<>();
        if(!doctorData.getSpecialtyArea().isEmpty()){
            doctorData.getSpecialtyArea().forEach(specialty -> {
                specialtyAreas.add(specialtyAreaRepository.findByName(specialty.getName())
                        .orElseThrow(() -> new RuntimeException("Specialty " + specialty.getName() + "not found", new NotFoundException()))
                );
            });
        }

        dbUser.setFirstName(doctorData.getFirstName());
        dbUser.setLastName(doctorData.getLastName());
        dbUser.setEmail(doctorData.getEmail());
        dbUser.setSpecialtyArea(specialtyAreas);

        return new UserDTO(dbUser);
    }

    @Transactional
    public void deleteDoctor(Integer dni){
        userRepository.deleteByDni(dni);
    }

}
