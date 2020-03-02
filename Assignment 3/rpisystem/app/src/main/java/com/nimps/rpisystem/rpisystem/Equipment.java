package com.nimps.rpisystem.rpisystem;

public class Equipment extends RpisystemApplication {
    public int id;
    public String dateCheckOut;
    public String dateCheckedIn;
    public enum device_condition {GOOD, DAMAGED, LOST};


    public void checkOut() {
        // Summary: User scans item to check out
        // Condition Check 0: Checks if TA is authorized user
        // Condition Check 1: Enter Panther ID - Checks, to see if they are registered in student table then


        // Condition Check 2:  ( Make sure studentID has not checkout multiple Raspberry PIs checked out)
        // SELECT count(`rental_id`) as count_student_rentals FROM `rentals` WHERE `student_panther_id` = "" AND `check_in_date` = NULL


        // If Student has no rentals checked out check inventory:
        // Get Available Raspberry Pi: Store KitID
        // SELECT * FROM `device_kits`  WHERE `device_kit_id​` NOT IN (SELECT `kit_id` FROM `rentals` WHERE `check_in_date` = NULL) AND `device_condition` = 'good' LIMIT 1

        // If SELECT request returns at LEAST one get due date and update rentals with pantherid and
        // SELECT `due_date` FROM `schedule` ORDER BY `date_id` DESC LIMIT 1
        // INSERT INTO `rentals`(`rental_id`, `student_panther_id`, `checkout_date`, `check_in_date`, `due_date`, `checkout_by`, `checkin_by`, `kit_id`) VALUES ([value-1],[value-2],[value-3],[value-4],[value-5],[value-6],[value-7],[value-8])
    }

    public void checkIn() {
        // Summary:​ GTA can check equipment back into the database system
        // Condition Check 0: Checks if TA is authorized user
        // Condition Check 1: Enter Panther ID - Checks, to see if they are registered in student table then


        // Get Kit ID from rental that matches pantherID
        // SELECT `kit_id` FROM `rentals` WHERE `student_panther_id` = "" AND `check_in_date` = NULL


        // Update device condition and update checkedin date for device
        // UPDATE `rentals` SET `check_in_date`=NOW(),`checkout_by`="" WHERE `student_panther_id`= "";
        // UPDATE `device_kits` SET `device_condition`= "" WHERE `barcode` ="";

    }
}
