package com.student_info.student_info_crud.repository;

import com.student_info.student_info_crud.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepository extends JpaRepository<Student,Long> {
}
