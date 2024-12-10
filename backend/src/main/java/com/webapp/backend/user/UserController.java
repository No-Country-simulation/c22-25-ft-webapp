package com.webapp.backend.user;

import com.webapp.backend.components.clinicalRecord.ClinicalRecordDTO;
import com.webapp.backend.components.clinicalRecord.ClinicalRecordDTOForAdmin;
import com.webapp.backend.components.clinicalRecord.ClinicalRecordDTOForDoctor;
import com.webapp.backend.components.clinicalRecord.ClinicalRecordService;
import com.webapp.backend.components.consultationRecord.ConsultationRecordDTO;
import com.webapp.backend.components.consultationRecord.ConsultationRecordService;
import com.webapp.backend.components.patient.PatientDTO;
import com.webapp.backend.components.patient.PatientService;
import com.webapp.backend.components.patient.PatientWithDxsDTO;
import com.webapp.backend.components.specialtyArea.SpecialtyAreaDTO;
import com.webapp.backend.components.specialtyArea.SpecialtyAreaService;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("users")
@AllArgsConstructor
public class UserController {
    private final UserService userService;
    private final PatientService patientService;
    private final SpecialtyAreaService specialtyAreaService;
    private final ClinicalRecordService clinicalRecordService;
    private final ConsultationRecordService consultationRecordService;


    /***** RUTAS GENERALES *****/
    @PutMapping("/password/users/{userDni}/update")
    public ResponseEntity<String> updatePassword(@RequestBody @Valid PasswordDTO updatedPassword, @PathVariable(name = "userDni") Integer userDni){
        userService.updatePassword(updatedPassword, userDni);
        return  ResponseEntity.status(201).body("Password update");
    }

    /***** RUTAS PARA ADMINISTRADORES *****/
    @GetMapping("/admin/users")
    public ResponseEntity<List<UserDTO>> getAllUsers(){
        List<UserDTO> result = userService.getAllUsers();
        return ResponseEntity.status(200).body(result);
    }

    @GetMapping("/admin/users/{dni}")
    public ResponseEntity<UserDTO> getUser(@PathVariable(name = "dni") Integer dni){
        UserDTO result =  userService.getUser(dni);
        return ResponseEntity.status(200).body(result);
    }

    @PostMapping("/admin/users/add")
    public ResponseEntity<UserDTO> saveUser(@RequestBody @Valid UserDTO newUserData){
        UserDTO result = userService.saveUser(newUserData);
        return ResponseEntity.status(201).body(result);
    }

    @PutMapping("/admin/users/{dni}/update")
    public ResponseEntity<UserDTO> updateUser(@RequestBody @Valid UserDTO updatedUserData, @PathVariable(name = "dni") Integer dni){
        UserDTO result = userService.updateUser(updatedUserData, dni);
        return ResponseEntity.status(201).body(result);
    }

    @DeleteMapping("/admin/users/{dni}/delete")
    public ResponseEntity<String> deleteUser(@PathVariable(name = "dni") Integer dni){
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

    @PutMapping("/admin/specialties/{specialtyId}/update")
    public ResponseEntity<SpecialtyAreaDTO> updateSpecialtyArea(@RequestBody @Valid SpecialtyAreaDTO updatedSpecialtyAreaData, @PathVariable(name = "specialtyId") Integer specialtyId){
        SpecialtyAreaDTO result = specialtyAreaService.updateSpecialtyArea(updatedSpecialtyAreaData, specialtyId);
        return ResponseEntity.status(201).body(result);
    }

    @DeleteMapping("/admin/specialties/{specialtyId}/delete")
    public ResponseEntity<String> deleteSpecialtyArea(@PathVariable(name = "specialtyId") Integer specialtyId){
        specialtyAreaService.deleteSpecialtyArea(specialtyId);
        return ResponseEntity.status(204).body("Specialty area deleted");
    }

    @GetMapping("/admin/records")
    public ResponseEntity<List<ClinicalRecordDTOForAdmin>> getAllClinicalRecordsForAdmin(){
        List<ClinicalRecordDTOForAdmin> result = clinicalRecordService.getAllClinicalRecordsForAdmin();
        return ResponseEntity.status(200).body(result);
    }



    /***** RUTAS PARA DOCTORES *****/
    @GetMapping("/doctor/{doctorDni}")
    public ResponseEntity<UserDTO> getDoctor(@PathVariable(name = "doctorDni") Integer doctorDni){
        UserDTO result =  userService.getDoctor(doctorDni);
        return ResponseEntity.status(200).body(result);
    }

    @PutMapping("/doctor/{doctorDni}/update")
    public ResponseEntity<UserDTO> updateDoctor(@RequestBody @Valid UserDTO updatedDoctorData, @PathVariable(name = "doctorDni") Integer doctorDni){
        UserDTO result = userService.updateDoctor(updatedDoctorData, doctorDni);
        return ResponseEntity.status(201).body(result);
    }

    @DeleteMapping("/doctor/{doctorDni}/delete")
    public ResponseEntity<String> deleteDoctor(@PathVariable(name = "doctorDni") Integer doctorDni){
        userService.deleteDoctor(doctorDni);
        return ResponseEntity.status(204).body("Doctor deleted");
    }

    @GetMapping("/doctor/{doctorDni}/patients")
    public ResponseEntity<List<PatientDTO>> getAllPatientsForDoctor(@PathVariable(name = "doctorDni") Integer doctorDni){
        List<PatientDTO> result = patientService.getAllPatientsForDoctor(doctorDni);
        return ResponseEntity.status(200).body(result);
    }

    @GetMapping("/doctor/{doctorDni}/patients/{patientDni}")
    public ResponseEntity<PatientWithDxsDTO> getPatientWithDx(@PathVariable(name = "doctorDni") Integer doctorDni, @PathVariable(name = "patientDni") Integer patientDni){
        PatientWithDxsDTO result = patientService.getPatientWithDx(doctorDni, patientDni);
        return ResponseEntity.status(200).body(result);
    }

    @PostMapping("/doctor/patients/add")
    public ResponseEntity<PatientDTO> savePatient(@RequestBody @Valid PatientDTO newPatientData){
        PatientDTO result  = patientService.savePatient(newPatientData);
        return ResponseEntity.status(201).body(result);
    }

    @PutMapping("/doctor/patients/{dni}/update")
    public ResponseEntity<PatientDTO> updatePatient(@RequestBody @Valid PatientDTO updatedPatientData, @PathVariable(name = "dni") Integer dni){
        PatientDTO result  = patientService.updatePatient(updatedPatientData, dni);
        return ResponseEntity.status(201).body(result);
    }

    @DeleteMapping("/doctor/patients/{dni}/delete")
    public ResponseEntity<String> deletePatient(@PathVariable(name = "dni") Integer dni){
        patientService.deletePatient(dni);
        return ResponseEntity.status(204).body("Usuario eliminado");
    }

    @GetMapping("/doctor/{doctorDni}/records")
    public ResponseEntity<List<ClinicalRecordDTOForDoctor>> getAllClinicalRecordsForDoctor(@PathVariable(name = "doctorDni") Integer doctorDni){
        List<ClinicalRecordDTOForDoctor> result = clinicalRecordService.getAllClinicalRecordsForDoctor(doctorDni);
        return ResponseEntity.status(200).body(result);
    }

    @PostMapping("/doctor/{doctorDni}/records/add/{patientDni}")
    public ResponseEntity<ClinicalRecordDTOForDoctor> saveClinicalRecord(@RequestBody @Valid ClinicalRecordDTO clinicalRecord, @PathVariable(name = "doctorDni") Integer doctorDni, @PathVariable(name="patientDni") Integer patientDni){
        ClinicalRecordDTOForDoctor result  = clinicalRecordService.saveClinicalRecord(clinicalRecord, doctorDni, patientDni);
        return ResponseEntity.status(201).body(result);
    }

    @PutMapping("/doctor/{doctorDni}/records/{recordId}/update/{patientDni}")
    public ResponseEntity<ClinicalRecordDTOForDoctor> updateClinicalRecord(@RequestBody @Valid ClinicalRecordDTO updatedClinicalRecordData, @PathVariable(name = "recordId") Integer recordId, @PathVariable(name = "doctorDni") Integer doctorDni, @PathVariable(name="patientDni") Integer patientDni) {
        ClinicalRecordDTOForDoctor result  = clinicalRecordService.updateClinicalRecord(updatedClinicalRecordData, recordId, doctorDni, patientDni);
        return ResponseEntity.status(201).body(result);
    }

    @DeleteMapping("/doctor/{doctorDni}/records/{recordId}/delete/{patientDni}")
    public ResponseEntity<String> deleteClinicalRecord(@PathVariable(name = "doctorDni") Integer doctorDni,@PathVariable(name = "recordId") Integer recordId, @PathVariable(name="patientDni") Integer patientDni) {
        clinicalRecordService.deleteClinicalRecord(recordId, doctorDni, patientDni);
        return ResponseEntity.status(204).body("Turno eliminado");
    }

    @PostMapping("/doctor/{recordId}/consultation/add")
    public ResponseEntity<ConsultationRecordDTO> saveConsultationRecord(@RequestBody @Valid ConsultationRecordDTO consultationRecordData, @PathVariable(name = "recordId") Integer recordId){
        ConsultationRecordDTO result = consultationRecordService.saveConsultationRecord(consultationRecordData, recordId);
        return ResponseEntity.status(201).body(result);
    }

    @PutMapping("/doctor/consultation/{consultationId}/update")
    public ResponseEntity<ConsultationRecordDTO> updateConsultationRecord(@RequestBody @Valid ConsultationRecordDTO consultationRecordData, @PathVariable(name = "consultationId") Integer consultationId){
        ConsultationRecordDTO result = consultationRecordService.updateConsultationRecord(consultationRecordData, consultationId);
        return ResponseEntity.status(201).body(result);
    }

    @DeleteMapping("/doctor/consultation/{consultationId}/delete")
    public ResponseEntity<String> deleteConsultationRecord(@PathVariable(name = "consultationId") Integer consultationId){
        consultationRecordService.deleteConsultationRecord(consultationId);
        return ResponseEntity.status(204).body("Consultation Record delete");
    }

}
