import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { StudentService } from '../../services/student.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-student-form',
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './student-form.component.html',
  styleUrl: './student-form.component.css',
})
export class StudentFormComponent implements OnInit {
  studentForm!: FormGroup;
  isEditMode = false;
  studentId!: number;

  constructor(
    private fb: FormBuilder,
    private studentService: StudentService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.studentForm = this.fb.group({
      studentName: ['', Validators.required],
      fatherName: [''],
      motherName: [''],
      address: ['', Validators.required],
      phoneNumber: ['', Validators.required],
    });

    this.route.params.subscribe((params) => {
      if (params['id']) {
        this.isEditMode = true;
        this.studentId = +params['id'];
        this.studentService
          .getStudentById(this.studentId)
          .subscribe((student) => {
            this.studentForm.patchValue(student);
          });
      }
    });
  }

  onSubmit(): void {
    if (this.studentForm.invalid) {
      this.studentForm.markAllAsTouched();
      return;
    }

    const studentData = this.studentForm.value;

    if (this.isEditMode) {
      this.studentService
        .updateStudent(this.studentId, studentData)
        .subscribe(() => {
          this.router.navigate(['/']);
        });
    } else {
      this.studentService.createStudent(studentData).subscribe(() => {
        this.router.navigate(['/']);
      });
    }
  }
}
