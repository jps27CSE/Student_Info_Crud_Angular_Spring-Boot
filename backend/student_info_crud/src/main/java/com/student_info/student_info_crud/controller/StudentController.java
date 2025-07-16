package com.student_info.student_info_crud.controller;

import com.student_info.student_info_crud.model.Student;
import com.student_info.student_info_crud.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/students")
@CrossOrigin(origins="http://localhost:4200")
public class StudentController  {

    @Autowired
    private StudentRepository studentRepo;

    @GetMapping
    public List<Student> getAll(){
        return studentRepo.findAll();
    }

    @PostMapping
    public Student create(@RequestBody Student student){
        return studentRepo.save(student);
    }

    @GetMapping("/{id}")
    public Student getById(@PathVariable Long id)
    {
        return studentRepo.findById(id).orElse(null);
    }

    @PutMapping("/{id}")
    public Student update(@PathVariable Long id, @RequestBody Student student)
    {
        student.setId(id);
        return studentRepo.save(student);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id)
    {
        studentRepo.deleteById(id);
    }

}
