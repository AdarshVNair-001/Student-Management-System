import { Component } from '@angular/core';
import { StudentServices } from '../../services/student.services';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-substd',
  imports: [FormsModule],
  templateUrl: './substd.html',
  styleUrls: ['./substd.css'],
  standalone: true
})
export class SubStd
{
  public iStudentId: number = 0;

  constructor(
    private m_studentServices: StudentServices
  ) {}

  public DeleteStudent(): void
  {
    this.m_studentServices.deleteStudent(this.iStudentId).subscribe({
      next: () =>
      {
        alert('Student deleted successfully');

        this.iStudentId = 0;
      },

      error: (objError: any) =>
      {
        console.error('Error deleting student:', objError);

        alert(
          'Error deleting student: ' +
          (objError.error?.message || objError.message)
        );
      }
    });
  }
}