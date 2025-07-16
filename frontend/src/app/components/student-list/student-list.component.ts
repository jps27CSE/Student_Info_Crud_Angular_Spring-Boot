import { Component, OnInit } from '@angular/core';
import { Student, StudentService } from '../../services/student.service';
import { Router } from '@angular/router';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-student-list',
  imports: [NgForOf],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css',
})
export class StudentListComponent implements OnInit {
  students: Student[] = [];

  constructor(
    private studentService: StudentService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.loadStudents();
  }

  loadStudents(): void {
    this.studentService.getStudents().subscribe((data) => {
      this.students = data;
    });
  }

  deleteStudent(id: number): void {
    if (confirm('Are you sure to delete?')) {
      this.studentService.deleteStudent(id).subscribe(() => {
        this.loadStudents();
      });
    }
  }

  editStudent(id: number): void {
    this.router.navigate(['/edit', id]);
  }

  goToCreateForm(): void {
    this.router.navigate(['/create']);
  }

  goToDetail(id: number): void {
    this.router.navigate(['/student', id]);
  }
}
