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
import org.apache.commons.codec.digest.DigestUtils;

/**
 * @author Serenist
 */
@WebServlet(urlPatterns = {"/SignUp"})
public class SignUp extends HttpServlet {

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     * @throws java.lang.ClassNotFoundException
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException, ClassNotFoundException {

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
            User user = new User();
            PrintWriter out = response.getWriter();
            boolean a = true;
            //Passing request parameters to variables
            String un = request.getParameter("username");

            String email = request.getParameter("email");
            String pw = request.getParameter("password");
            //encrypt password
            String md5Hex = DigestUtils
                    .md5Hex(pw + "pass").toUpperCase();
            String name = request.getParameter("name");
            String surn = request.getParameter("surname");
            String BD = request.getParameter("birthday");
            String country = request.getParameter("country");
            String town = request.getParameter("town");
            String work = request.getParameter("work");
            String interests = request.getParameter("interests");
            String info = request.getParameter("info");
            response.setContentType("text/json;charset=UTF-8");
            if (!un.matches("[A-Za-z0-9]{8,}")) {
                response.sendError(HttpServletResponse.SC_BAD_REQUEST);
                a = false;
            } else if (!email.matches("[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$")) {
                response.sendError(HttpServletResponse.SC_BAD_REQUEST);
                a = false;
            } else if (!pw.matches("^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,}$")) {
                response.sendError(HttpServletResponse.SC_BAD_REQUEST);
                a = false;
            } else if (!name.matches("[A-Za-z]{3,15}")) {
                response.sendError(HttpServletResponse.SC_BAD_REQUEST);
                a = false;
            } else if (!surn.matches("[A-Za-z]{3,15}")) {
                response.sendError(HttpServletResponse.SC_BAD_REQUEST);
                a = false;
            } else if (!town.matches("[A-Za-z]{3,20}")) {
                response.sendError(HttpServletResponse.SC_BAD_REQUEST);
                a = false;
            } else if (!work.matches("[A-Za-z]{3,20}")) {
                response.sendError(HttpServletResponse.SC_BAD_REQUEST);
                a = false;
            } else if (!interests.matches("[A-Za-z0-9\\s]{0,100}")) {
                response.sendError(HttpServletResponse.SC_BAD_REQUEST);
                a = false;
            } else if (!info.matches("[A-Za-z0-9\\s]{0,500}")) {
                response.sendError(HttpServletResponse.SC_BAD_REQUEST);
                a = false;
            }
            if (a == true) {
                user.setUserName(un);
                user.setEmail(email);
                user.setPassword(md5Hex);
                user.setFirstName(name);
                user.setLastName(surn);
                user.setBirthDate(BD);
                user.setGender("N/A");
                user.setCountry(country);
                user.setAddress("");
                user.setOccupation(work);
                user.setInterests(interests);
                user.setTown(town);
                user.setInfo(info);
                UserDB.addUser(user);
                Gson g = new Gson();
                out.println(g.toJson(user.toString()));
            }
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
