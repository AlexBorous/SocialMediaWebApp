/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import com.google.gson.Gson;
import gr.csd.uoc.cs359.winter2020.photobook.db.CommentDB;
import gr.csd.uoc.cs359.winter2020.photobook.db.PostDB;
import gr.csd.uoc.cs359.winter2020.photobook.db.UserDB;
import gr.csd.uoc.cs359.winter2020.photobook.model.Comment;
import gr.csd.uoc.cs359.winter2020.photobook.model.Post;
import gr.csd.uoc.cs359.winter2020.photobook.model.User;
import java.io.IOException;
import java.io.PrintWriter;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.ListIterator;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 *
 * @author alex
 */
@WebServlet(urlPatterns = {"/OnlineUsers"})
public class OnlineUsers extends HttpServlet {

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
            throws ServletException, IOException, ClassNotFoundException, ParseException {
        response.setContentType("text/json;charset=UTF-8");
        try (PrintWriter out = response.getWriter()) {
            HttpSession session = request.getSession(true);
            ArrayList<User> users;
            users = new ArrayList<>();
            SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss.SSS");

            Date now = new Date();
            /* TODO output your page here. You may use following sample code. */
            List<Post> post = PostDB.getTop10RecentPosts();
            for (int i = 0; i < post.size(); i++) {

                Date date = formatter.parse(post.get(i).getCreatedAt());

                if (now.getTime() - date.getTime() <= 1 * 60 * 1000) {
                    String userName = post.get(i).getUserName();
                    if (userName.equals((String) session.getAttribute("username")))
                        continue;
                    else
                    users.add(UserDB.getUser(userName));
                }

            }
            SimpleDateFormat formatter1 = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
            List<Comment> comments = CommentDB.getComments();
            ListIterator<Comment> listItr = comments.listIterator();
            while (listItr.hasNext()) {
                Comment com = listItr.next();
                if (com.getModifiedAt().equals("")) {
                    Date date = formatter1.parse(com.getCreatedAt());
                    if (now.getTime() - date.getTime() <= 1 * 60 * 1000) {
                        String userName = com.getUserName();
                        if (userName.equals((String) session.getAttribute("username")))
                            continue;
                        User user = UserDB.getUser(userName);
                        if (users.contains(user)) {
                            continue;
                        } else {
                            users.add(user);
                        }
                    }
                } else {
                    Date date = formatter1.parse(com.getModifiedAt());
                    if (now.getTime() - date.getTime() <= 1 * 60 * 1000) {
                        String userName = com.getUserName();
                        if (userName.equals((String) session.getAttribute("username")))
                            continue;
                        User user = UserDB.getUser(userName);
                        if (users.contains(user))
                            continue;
                        else
                            users.add(user);
                    }
                }
            }

            Gson g = new Gson();
            out.print(g.toJson(users));
        }
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
            processRequest(request, response);
        } catch (ClassNotFoundException ex) {
            Logger.getLogger(OnlineUsers.class.getName()).log(Level.SEVERE, null, ex);
        } catch (ParseException ex) {
            Logger.getLogger(OnlineUsers.class.getName()).log(Level.SEVERE, null, ex);
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
