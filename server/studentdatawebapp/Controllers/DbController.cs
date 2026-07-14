using Microsoft.AspNetCore.Mvc;
using MySql.Data.MySqlClient;
using studentdatawebapp.Datas;


namespace studentdatawebapp.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class DbController : Controller
    {
        [HttpGet]
        public string TestConnection()
        {
            try
            {
                MySqlConnection objConnection =
                    Connection.GetConnection();

                objConnection.Open();

                return "Connected Successfully";
            }
            catch (Exception objException)
            {
                return "Connection Failed: " + objException.Message;
            }
        }
    }
}