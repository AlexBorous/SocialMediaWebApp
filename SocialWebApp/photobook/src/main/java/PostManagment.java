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
import java.io.IOException;
import java.io.PrintWriter;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Random;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 *
 * @author Serenist
 */
@WebServlet(urlPatterns = {"/PostManagment"})
public class PostManagment extends HttpServlet {

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

        try (PrintWriter out = response.getWriter()) {
            response.setContentType("text/json;charset=UTF-8");
            HttpSession session = request.getSession(false);
            if ("Create".equals(request.getParameter("code"))) {
                Post post = new Post();
                Random rd = new Random();
                //Create date of post
                SimpleDateFormat formatter = new SimpleDateFormat("dd/MM/yyyy HH:mm:ss");
                Date date = new Date();
                post.setUserName((String) session.getAttribute("username"));
                post.setDescription(request.getParameter("PostDes"));
                post.setImageBase64(request.getParameter("file"));
                System.out.println("File:" + request.getParameter("file"));
                post.setLatitude(request.getParameter("lat"));
                post.setLongitude(request.getParameter("lon"));
                post.setCreatedAt(formatter.format(date));
                post.setPostID(rd.nextInt());
                PostDB.addPost(post);
                Gson g = new Gson();
                out.print(g.toJson(post));
            } else if ("Show".equals(request.getParameter("code"))) {
                List<Post> posts = PostDB.getTop10RecentPosts();
                Gson g = new Gson();
                out.print(g.toJson(posts));

            } else if ("ShowSelf".equals(request.getParameter("code"))) {
                List<Post> posts = PostDB.getTop10RecentPostsOfUser((String) session.getAttribute("username"));
                Gson g = new Gson();
                out.print(g.toJson(posts));

            } else if ("ShowUser".equals(request.getParameter("code"))) {
                String userName = (String) session.getAttribute("UsernameForSearch");
                List<Post> posts = PostDB.getTop10RecentPostsOfUser(userName);
                Gson g = new Gson();
                out.print(g.toJson(posts));
            } else if ("GetUserNames".equals(request.getParameter("code"))) {
                List<String> users = UserDB.getAllUsersNames();
                Gson g = new Gson();
                out.print(g.toJson(users));
            } else if ("DeletePost".equals(request.getParameter("code"))) {
                int postID = Integer.parseInt(request.getParameter("postID"));
                PostDB.deletePost(postID);
                String message = "Post deleted";
                Gson g = new Gson();
                out.print(g.toJson(message));
            } else if ("createComment".equals(request.getParameter("code"))) {
                Comment comment = new Comment();
                comment.setComment(request.getParameter("description"));
                comment.setUserName(request.getParameter("username"));
                comment.setPostID(Integer.parseInt(request.getParameter("postID")));
                CommentDB.addComment(comment);
                Gson g = new Gson();
                out.print(g.toJson(comment));

            }
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
        try {
            processRequest(request, response);
        } catch (ClassNotFoundException error) {

        }
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
        } catch (ClassNotFoundException error) {

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
