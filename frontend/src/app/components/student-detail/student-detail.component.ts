import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Student, StudentService } from '../../services/student.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-student-detail',
  imports: [NgIf, RouterLink],
  templateUrl: './student-detail.component.html',
  styleUrl: './student-detail.component.css',
})
export class StudentDetailComponent implements OnInit {
  student!: Student;

  constructor(
    private route: ActivatedRoute,
    private studentService: StudentService,
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.studentService
      .getStudentById(id)
      .subscribe((data) => (this.student = data));
  }
}
