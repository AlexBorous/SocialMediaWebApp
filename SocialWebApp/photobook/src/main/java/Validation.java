/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import com.google.gson.Gson;
import gr.csd.uoc.cs359.winter2020.photobook.db.UserDB;
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
@WebServlet(urlPatterns = {"/Validation"})
public class Validation extends HttpServlet {

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


        /**
         * Email String e = request.getParameter("email"); if
         * (!e.matches("[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}")) {
         * response.sendError(HttpServletResponse.SC_BAD_REQUEST); } else if
         * (UserDB.checkValidEmail(e)) { user.setEmail(e); }*
         */
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
            PrintWriter out = response.getWriter();
            if (request.getParameter("username") != null) {
                String n = (request.getParameter("username"));
                Gson g = new Gson();
                response.setContentType("application/json;charset=UTF-8");
                if (!UserDB.checkValidUserName(n)) {
                    out.print(g.toJson("Username already exists"));
                }
            }
            if (request.getParameter("email") != null) {
                String e = (request.getParameter("email"));
                Gson g = new Gson();
                response.setContentType("application/json;charset=UTF-8");
                if (!UserDB.checkValidEmail(e)) {
                    out.print(g.toJson("Email already exists"));
                }
            }


        } catch (ClassNotFoundException exp) {

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
