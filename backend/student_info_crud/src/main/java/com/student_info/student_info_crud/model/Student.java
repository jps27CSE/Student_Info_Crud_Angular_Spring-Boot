package com.student_info.student_info_crud.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String studentName;

    private String fatherName;
    private String motherName;

    @Column(nullable = false)
    private String address;

    @Column(nullable = false)
    private String phoneNumber;

}
