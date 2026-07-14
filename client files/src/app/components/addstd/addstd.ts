import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IStudentModel } from '../../model/student.model';
import { StudentServices } from '../../services/student.services';

@Component({
  selector: 'app-addstd',
  imports: [FormsModule],
  templateUrl: './addstd.html',
  styleUrls: ['./addstd.css'],
  standalone: true
})
export class AddStd
{
  public objStudent: IStudentModel =
  {
    id: 0,
    name: '',
    age: 0,
    branch: ''
  };

  public strSuccess: string | null = null;

  constructor(
    private m_studentServices: StudentServices
  ) {}

  public addStudent(): void
  {
    if (
      !this.objStudent.name ||
      !this.objStudent.branch ||
      this.objStudent.id === 0
    )
    {
      alert('Please fill all fields');
      return;
    }

    this.m_studentServices.addStudent(this.objStudent).subscribe({
      next: (objResponse: string) =>
      {
        console.log('Student added successfully:', objResponse);

        this.strSuccess = 'Student added successfully!';
        alert('Student added successfully!');

        this.objStudent =
        {
          id: 0,
          name: '',
          age: 0,
          branch: ''
        };
      },

      error: (objError: any) =>
      {
        console.error('Error adding student:', objError);

        alert(
          'Error adding student: ' +
          (objError.error?.message || objError.message)
        );
      }
    });
  }
}