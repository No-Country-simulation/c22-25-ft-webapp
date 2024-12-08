package com.webapp.backend.user;

import com.webapp.backend.components.clinicalRecord.ClinicalRecordDTOForAdmin;
import com.webapp.backend.components.clinicalRecord.ClinicalRecordService;
import com.webapp.backend.components.patient.PatientDTO;
import com.webapp.backend.components.patient.PatientService;
import com.webapp.backend.components.specialtyArea.SpecialtyAreaDTO;
import com.webapp.backend.components.specialtyArea.SpecialtyAreaService;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("")
@AllArgsConstructor
public class UserController {
    private final UserService userService;
    private final PatientService patientService;
    private final SpecialtyAreaService specialtyAreaService;
    private final ClinicalRecordService clinicalRecordService;

    /***** RUTAS PARA ADMINISTRADORES *****/
    @GetMapping("/admin/users")
    public ResponseEntity<List<UserDTO>> getAllUsers(){
        List<UserDTO> result = userService.getAllUsers();
        return ResponseEntity.status(200).body(result);
    }

    @PostMapping("/admin/users/add")
    public ResponseEntity<UserDTO> saveUser(@RequestBody @Valid UserDTO newUserData){
        UserDTO result = userService.saveUser(newUserData);
        return ResponseEntity.status(201).body(result);
    }

    @PostMapping("/admin/users/update/{dni}")
    public ResponseEntity<UserDTO> updateUser(@RequestBody @Valid UserDTO updatedUserData, @RequestParam(name = "dni") Integer dni){
        UserDTO result = userService.updateUser(updatedUserData, dni);
        return ResponseEntity.status(201).body(result);
    }

    @DeleteMapping("/admin/users/delete/{dni}")
    public ResponseEntity<String> deleteUser(@RequestParam(name = "dni") Integer dni){
        userService.deleteUser(dni);
        return ResponseEntity.status(204).body("Usuario eliminado");
    }

    @GetMapping("/admin/patients")
    public ResponseEntity<List<PatientDTO>> getAllPatients(){
        List<PatientDTO> result = patientService.getAllPatientsForAdmin();
        return ResponseEntity.status(200).body(result);
    }

    @GetMapping("/admin/specialties")
    public ResponseEntity<List<SpecialtyAreaDTO>> getAllSpecialties(){
        List<SpecialtyAreaDTO> result = specialtyAreaService.getAllSpecialtyAreas();
        return ResponseEntity.status(200).body(result);
    }

    @PostMapping("/admin/specialties/add")
    public ResponseEntity<SpecialtyAreaDTO> saveSpecialtyArea(@RequestBody @Valid SpecialtyAreaDTO newSpecialtyAreaData){
        SpecialtyAreaDTO result = specialtyAreaService.saveSpecialtyArea(newSpecialtyAreaData);
        return ResponseEntity.status(201).body(result);
    }

    @PutMapping("/admin/specialties/update/{id}")
    public ResponseEntity<SpecialtyAreaDTO> updateSpecialtyArea(@RequestBody @Valid SpecialtyAreaDTO updatedSpecialtyAreaData, @RequestParam(name = "id") Integer id){
        SpecialtyAreaDTO result = specialtyAreaService.updateSpecialtyArea(updatedSpecialtyAreaData, id);
        return ResponseEntity.status(201).body(result);
    }

    @DeleteMapping("/admin/specialties/delete/{id}")
    public ResponseEntity<String> deleteSpecialtyArea(@RequestParam(name = "id") Integer id){
        specialtyAreaService.deleteSpecialtyArea(id);
        return ResponseEntity.status(204).body("Specialty area deleted");
    }

    @GetMapping("/admin/records")
    public ResponseEntity<List<ClinicalRecordDTOForAdmin>> getAllClinicalRecords(){
        List<ClinicalRecordDTOForAdmin> result = clinicalRecordService.getAllClinicalRecordsForAdmin();
        return ResponseEntity.status(200).body(result);
    }


    /***** RUTAS PARA DOCTORES *****/
    @GetMapping("/doctor/{doctorDni}/patients")
    public ResponseEntity<List<PatientDTO>> getAllPatientsForDoctor(@RequestParam(name = "doctorDni") Integer doctorDni){
        List<PatientDTO> result = patientService.getAllPatientsForDoctor(doctorDni);
        return ResponseEntity.status(200).body(result);
    }

}
