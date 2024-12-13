package com.webapp.backend.email;

import com.webapp.backend.user.User;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;


@Service
@Slf4j
@RequiredArgsConstructor
public class EmailService {

    private final JavaMailSender mailSender;

    public void sendVerificationEmail(User user, String token) throws MessagingException {
        String subject = "Email Verification";
        String messageContent = """
            <p>Dear %s,</p>
            <p>Your verification token is:</p>
            <p><b>%s</b></p>
            <p>Please use this token to verify your email address and activate your account.</p>
            <p>Thank you for registering!</p>
        """.formatted(user.getFirstName(), token);

        MimeMessage message = mailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message, true);

        helper.setTo(user.getEmail());
        helper.setSubject(subject);
        helper.setText(messageContent, true);

        mailSender.send(message);
    }
}
