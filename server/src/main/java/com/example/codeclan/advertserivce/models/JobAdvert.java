package com.example.codeclan.advertserivce.models;

import com.example.codeclan.advertserivce.helpers.JobType;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name="jobs_adverts")
public class JobAdvert extends Advert {

    @Column
    private String industry;

    @Column
    private JobType jobType;

    @Column
    private double salary;

    // Default constructor - to be used by Spring
    public JobAdvert() {
    }

    public JobAdvert(String title, String description,
                     double cost, Customer customer,
                     String industry, JobType jobType,
                     double salary) {

        super(title, description, cost, customer);
        this.industry = industry;
        this.jobType = jobType;
        this.salary = salary;

    }

    public String getIndustry() {
        return industry;
    }

    public void setIndustry(String industry) {
        this.industry = industry;
    }

    public JobType getJobType() {
        return jobType;
    }

    public void setJobType(JobType jobType) {
        this.jobType = jobType;
    }

    public double getSalary() {
        return salary;
    }

    public void setSalary(double salary) {
        this.salary = salary;
    }
}
