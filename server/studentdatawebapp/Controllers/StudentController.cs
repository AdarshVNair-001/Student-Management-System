using Microsoft.AspNetCore.Mvc;
using MySql.Data.MySqlClient;
using studentdatawebapp.Datas;
using studentdatawebapp.Model;

namespace studentdatawebapp.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class StudentController : Controller
    {
        [HttpGet]
        public IActionResult GetStudents()
        {
            using (MySqlConnection objConnection = Connection.GetConnection())
            {
                objConnection.Open();

                string strQuery = "SELECT * FROM student1";

                MySqlCommand objCommand =
                    new MySqlCommand(strQuery, objConnection);

                MySqlDataReader objReader =
                    objCommand.ExecuteReader();

                List<object> lstStudents = new();

                while (objReader.Read())
                {
                    lstStudents.Add(new
                    {
                        Id = objReader["id"],
                        Name = objReader["name"],
                        Age = objReader["age"],
                        Branch = objReader["branch"]
                    });
                }

                return Ok(lstStudents);
            }
        }

        [HttpGet("{id}")]
        public IActionResult GetStudentById(int iId)
        {
            using (MySqlConnection objConnection = Connection.GetConnection())
            {
                objConnection.Open();

                string strQuery =
                    "SELECT * FROM student1 WHERE id = @id";

                MySqlCommand objCommand =
                    new MySqlCommand(strQuery, objConnection);

                objCommand.Parameters.AddWithValue("@id", iId);

                MySqlDataReader objReader =
                    objCommand.ExecuteReader();

                List<object> lstStudents = new();

                while (objReader.Read())
                {
                    lstStudents.Add(new
                    {
                        Id = objReader["id"],
                        Name = objReader["name"],
                        Age = objReader["age"],
                        Branch = objReader["branch"]
                    });
                }

                return Ok(lstStudents);
            }
        }

        [HttpPost("all")]
        public IActionResult AddAllStudents(
            List<Data> lstStudents)
        {
            int iRows = 0;

            foreach (Data objStudent in lstStudents)
            {
                using (MySqlConnection objConnection = Connection.GetConnection())
                {
                    objConnection.Open();

                    string strQuery =
                        @"INSERT INTO student1
                        (id,name,age,branch)
                        VALUES
                        (@id,@name,@age,@branch)";

                    MySqlCommand objCommand =
                        new MySqlCommand(strQuery, objConnection);

                    objCommand.Parameters.AddWithValue("@id", objStudent.Id);
                    objCommand.Parameters.AddWithValue("@name", objStudent.Name);
                    objCommand.Parameters.AddWithValue("@age", objStudent.Age);
                    objCommand.Parameters.AddWithValue("@branch", objStudent.Branch);

                    try
                    {
                        iRows += objCommand.ExecuteNonQuery();
                    }
                    catch (Exception objException)
                    {
                        return BadRequest(objException.Message);
                    }
                }
            }

            return Ok($"{iRows} row inserted");
        }

        [HttpPost]
        public IActionResult AddStudent(
            Data objStudent)
        {
            using (MySqlConnection objConnection = Connection.GetConnection())
            {
                objConnection.Open();

                string strQuery =
                    @"INSERT INTO student1
                    (id,name,age,branch)
                    VALUES
                    (@id,@name,@age,@branch)";

                MySqlCommand objCommand =
                    new MySqlCommand(strQuery, objConnection);

                objCommand.Parameters.AddWithValue("@id", objStudent.Id);
                objCommand.Parameters.AddWithValue("@name", objStudent.Name);
                objCommand.Parameters.AddWithValue("@age", objStudent.Age);
                objCommand.Parameters.AddWithValue("@branch", objStudent.Branch);

                try
                {
                    int iRows =
                        objCommand.ExecuteNonQuery();

                    return Ok($"{iRows} row inserted");
                }
                catch (Exception objException)
                {
                    return BadRequest(objException.Message);
                }
            }
        }

        [HttpPut("{id}")]
        public IActionResult UpdateStudent(int iId,Data objStudent)
        {
            using (MySqlConnection objConnection = Connection.GetConnection())
            {
                objConnection.Open();

                string strQuery =
                    @"UPDATE student1
                      SET name = @name
                      WHERE id = @id";

                MySqlCommand objCommand =
                    new MySqlCommand(strQuery, objConnection);

                objCommand.Parameters.AddWithValue("@name", objStudent.Name);
                objCommand.Parameters.AddWithValue("@id", iId);

                int iRows =
                    objCommand.ExecuteNonQuery();

                return Ok($"{iRows} row updated");
            }
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteStudent(int iId)
        {
            using (MySqlConnection objConnection = Connection.GetConnection())
            {
                objConnection.Open();

                string strQuery =
                    "DELETE FROM student1 WHERE id = @id";

                MySqlCommand objCommand =
                    new MySqlCommand(strQuery, objConnection);

                objCommand.Parameters.AddWithValue("@id", iId);

                int iRows =
                    objCommand.ExecuteNonQuery();

                return Ok($"{iRows} row deleted");
            }
        }
    }
}