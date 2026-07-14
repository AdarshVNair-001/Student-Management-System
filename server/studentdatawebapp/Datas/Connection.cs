using MySql.Data.MySqlClient;

namespace StudentDataWebApp.Datas
{
    public class Connection
    {
        private const string CONNECTION_STRING =
            "server=localhost;database=school;user=root;password=adarsh";

        public static MySqlConnection GetConnection()
        {
            return new MySqlConnection(CONNECTION_STRING);
        }
    }
}