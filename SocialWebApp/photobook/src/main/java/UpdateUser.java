/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import com.google.gson.Gson;
import gr.csd.uoc.cs359.winter2020.photobook.db.UserDB;
import gr.csd.uoc.cs359.winter2020.photobook.model.User;
import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author Serenist
 */
@WebServlet(urlPatterns = {"/UpdateUser"})
public class UpdateUser extends HttpServlet {

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        try {

            PrintWriter out = response.getWriter();
            //Passing request parameters to variables
            String unUp = request.getParameter("usernameForUpdate");
            User user = UserDB.getUser(unUp);
            String email = request.getParameter("email");
            String pw = request.getParameter("password");
            String name = request.getParameter("name");
            String surn = request.getParameter("surname");
            String BD = request.getParameter("birthday");
            String country = request.getParameter("country");
            String town = request.getParameter("town");
            String work = request.getParameter("work");
            String interests = request.getParameter("interests");
            String info = request.getParameter("info");
            response.setContentType("text/json;charset=UTF-8");
            if (email != "") {
                user.setEmail(email);
            }
            if (pw != "") {
                user.setPassword(pw);
            }
            if (name != "") {
                user.setFirstName(name);
            }
            if (surn != "") {
                user.setLastName(surn);
            }
            if (BD != "") {
                user.setBirthDate(BD);
            }
            user.setGender("Male");
            if (country != "") {
                user.setCountry(country);
            }
            user.setAddress("");
            if (work != "") {
                user.setOccupation(work);
            }
            if (interests != "") {
                user.setInterests(interests);
            }
            if (town != "") {
                user.setTown(town);
            }
            if (info != "") {
                user.setInfo(info);
            }
            UserDB.updateUser(user);
            Gson g = new Gson();
            out.println(g.toJson(user));

            //out.println(email);
        } catch (ClassNotFoundException exp) {
            PrintWriter out = response.getWriter();
            out.println("wrong");
        }
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
